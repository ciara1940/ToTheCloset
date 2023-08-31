# To The Closet

Welcome to To The Closet – Your gateway to sustainable luxury fashion. Discover a world where elegance meets eco-consciousness. Our platform offers exquisite clothing rentals, allowing you to indulge in luxury while reducing your carbon footprint. Join us in redefining fashion with a sustainable twist and make a positive impact on both style and the environment.

## Demo Video

[Click here to watch demo video](https://www.youtube.com/watch?v=mlw1beXC-eY&ab_channel=TIANCHULIN_)

## Features

- Browse a curated selection of luxury clothing items.
- Rent clothing items for special occasions or everyday wear.
- Contribute to a circular fashion economy and reduce environmental impact.

### Image Search

Enhance your shopping experience with our advanced image search feature:

- **User Image Upload**: Users can upload images of clothing items they're interested in.
- **Image to Vector Embeddings**: Uploaded images are processed using TensorFlow to generate vector embeddings, compact mathematical representations.
- **Pinecone Vector Database**: Vector embeddings are stored in the Pinecone database, optimized for efficient similarity searches.
- **Precise Recommendations**: Based on similarity scores, the system retrieves clothing items with the most similar vector embeddings. This process ensures accurate and tailored recommendations for visually similar clothing items.

### Text Search

Effortlessly find the perfect attire using our AI-powered text search feature:

- **User Input Search**: Users can search for clothing items using natural language queries, such as descriptions or keywords.
- **OpenAI Chat API**: User inputs, along with meticulously designed prompts, are sent to the OpenAI Chat API. The user inputs are processed to extract keywords that align with our categories. OpenAI sends back a JSON response which adheres to a format specified in the prompt.
- **Filter Function**: The generated JSON responses are processed by a filter function. This function refines and organizes the results to provide users with a tailored list of related products.

### Size Recommender

Make informed clothing sizing decisions using our size recommender feature:

- **Personalized Fit**: Users' measurements and clothing fit preferences (e.g., tight, normal, loose) are retrieved upon user registration.
- **Precise Recommendations**: An ideal size is suggested for a comfortable and flattering fit, based on an analysis of users' measurements, fit preference, and the product's sizing chart.

## Technologies Used

- **Frontend**: Next.js (React framework) with Tailwind CSS styling, deployed on Vercel
- **Backend**: Python (Flask framework) deployed on AWS Elastic Container Registry and Elastic Container Service
- **Database**: Postgresql database deployed on AWS Relational Database Service
- **Images**: AWS S3 Cloud Storage
- **AI**: TensorFlow, Pinecone Vector Database, OpenAI Chat API GPT 3.5

## Links
- **Vercel**: https://tothecloset.vercel.app/
- **AWS Backend**: 

## Getting Started

### 1. Build .env file

#### .env file format

```
# Postgresql Database (hosted on AWS RDS)
DB_HOST= _tothecloset.cwfspfe4ypwi.ap-southeast-1.rds.amazonaws.com
DB_PORT=5432
DB_NAME=tothecloset
DB_USER=postgres
DB_PASSWORD= **********

# Pinecone Database
PINECONE_API_KEY= ********************************
PINECONE_ENV=us-west1-gcp-free

# OpenAI
OPENAI_API_KEY = *********************************
```
*Note: Access to Databases are restricted to certain users*

#### Get OpenAI API Key

 - **Log in to OpenAI** : Log in / Sign up using this [url] [https://openai.com/blog/openai-api]
 - **Obtain API Key**: Under 'View API Keys', create a New Secret Key
 - **Put in the .env file**: OPENAI_API_KEY = "<OpenAI API Key>"

### 2. How to run

#### Clone the project
```
git clone https://github.com/smu-hack-dsc/Team-04-Project.git
```

### Next.js Frontend

#### Install dependencies
```
npm install
```

#### Run development server
```
npm run dev
```

### Python Backend

#### Access Python backend folder
```
cd backend
```

#### Install dependencies
```
pip install -r requirements.txt
```

#### Run Flask app
```
python app.py
```


