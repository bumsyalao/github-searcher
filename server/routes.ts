import axios from 'axios';
import redis from 'redis'
const redisClient = redis.createClient()


redisClient.on('connect', () => { console.log("Redis connection successful") })

/**
 * Gets Repository
 * Route: GET: /get-repository
 * @param {object} req object
 * @param {object} res object
 * @returns {response} response object
 */
export const getRepositories = async (req, res) => {
  const search = req.query.search;
  const per_page = req.query.per_page;
  const page = req.query.page;
  const cacheKey = req.url + search + per_page + page;

  try {
    redisClient.get(cacheKey, async (err, cache) => {
      if (cache) {
        return res.status(200).json(JSON.parse(cache))
      }
      const response = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: req.query.search,
          per_page: req.query.per_page || 30,
          page: req.query.page
        }
      });
      redisClient
        .set(cacheKey, JSON.stringify(response.data), 'EX', 60 * 60 * 2, async (saveErr, saved) => {
          if (saveErr) {
            return res.status(500).json({ err: saveErr })
          }

          res.status(200).json(response.data)
        })
    })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

}

/**
 * Gets Users
 * Route: GET: /get-user
 * @param {object} req object
 * @param {object} res object
 * @returns {response} response object
 */
export const getUser = async (req, res) => {
  const search = req.query.search;
  const per_page = req.query.per_page;
  const page = req.query.page;
  const cacheKey = req.url + search + per_page + page;
  try {
    redisClient.get(cacheKey, async (err, cache) => {
      if (cache) {
        return res.status(200).json(JSON.parse(cache))
      }

      const response = await axios.get('https://api.github.com/search/users', {
        params: {
          q: req.query.search,
          per_page: req.query.per_page || 30,
          page: req.query.page
        }
      });

      redisClient
        .set(cacheKey, JSON.stringify(response.data), 'EX', 60 * 60 * 2, async (saveErr, saved) => {
          if (saveErr) {
            return res.status(500).json({ err: saveErr })
          }

          res.status(200).json(response.data)
        })
    })

  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

}

//api function to clear cache
// export const clearCache = async () => {

// }




