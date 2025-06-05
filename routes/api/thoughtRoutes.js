const router = require('express').Router();

// Placeholder GET route
router.get('/', (req, res) => {
  res.json({ message: 'Thought route working!' });
});

module.exports = router;