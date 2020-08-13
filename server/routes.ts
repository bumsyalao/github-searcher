import axios from 'axios';
import redis from 'redis'
const redisClient = redis.createClient()


redisClient.on('connect', () => { console.log("Redis connection successful") })

//Api function to get repostories and store in redis cache
export const getRepositories = async (req, res) => {
  const search = req.query.search
  try {
    redisClient.get(search, async (err, cache) => {
      if (cache) {
        return res.status(200).json(JSON.parse(cache))
      }

      const response = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: req.query.search
        }
      });

      redisClient
        .set(search, JSON.stringify(response.data), async (saveErr, saved) => {
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

//api function to get users and store in redis cache
export const getUser = async (req, res) => {
  const search = req.query.search
  try {
    redisClient.get(search, async (err, cache) => {
      if (cache) {
        return res.status(200).json(JSON.parse(cache))
      }

      const response = await axios.get('https://api.github.com/search/users', {
        params: {
          q: req.query.search
        }
      });

      redisClient
        .set(search, JSON.stringify(response.data), async (saveErr, saved) => {
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




