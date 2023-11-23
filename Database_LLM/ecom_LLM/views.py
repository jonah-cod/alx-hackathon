from django.http import JsonResponse
from langchain.agents import create_sql_agent
from langchain.agents.agent_toolkits import SQLDatabaseToolkit
from langchain.sql_database import SQLDatabase
from langchain.chat_models import ChatOpenAI
from langchain.agents.agent_types import AgentType
def add_ten(request, question):
    try:
        KEY ="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"
        # postgresql+psycopg2://postgres:root@localhost:5432/Skol
        # pip install -r requirement.txt
        #connect to DB
        # If your password has an '@' sign it will throw an error
        database=SQLDatabase.from_uri("postgresql+psycopg2://postgres:postgresAdmin@localhost:5432/e_commerce")
        # print(database)
        # cro LLM fro Parsing queries and results
        llm=ChatOpenAI(model="gpt-3.5-turbo", openai_api_key=KEY)
        #Toolkit for interacting with SQL databases.
        toolkit = SQLDatabaseToolkit(db=database, llm=llm)

        # print(toolkit)
        #create an Angent

        agent_executor=create_sql_agent(
            llm=llm,
            toolkit=toolkit,
            agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
            verbose=True,
            prefix="You are an agent designed to interact with a SQL database. Do not execute any delete or drop  statement to the database instead say its not allowed"
        )
# Tell the names of trainees that have graduated, are not working , have great technical skills and great soft skills
        result=agent_executor(question)
        return JsonResponse({'result': result})
    except ValueError:
        return JsonResponse({'error': 'A error Occured.'}, status=400)