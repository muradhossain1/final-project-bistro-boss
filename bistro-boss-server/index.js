const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vy1ux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const menuCollections = client.db('bistroDB').collection('menu')
        const reviewCollections = client.db('bistroDB').collection('reviews')
        const cartCollections = client.db('bistroDB').collection('carts')

        app.get('/menu', async (req, res) => {
            const result = await menuCollections.find().toArray();
            res.send(result);
        })

        app.get('/reviews', async (req, res) => {
            const result = await reviewCollections.find().toArray();
            res.send(result);
        })

        // cart collections
        app.get('/carts', async(req, res) => {
            const email = req.query.email;
            const query = { email: email};
            const result = await cartCollections.find(query).toArray();
            res.send(result)
        })
        app.post('/carts', async(req, res) => {
            const cartItem = req.body;
            const result = await cartCollections.insertOne(cartItem)
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('boss is sitting.....')
})

app.listen(port, () => {
    console.log(`Bistro boss is sitting on port ${port}`)
})
