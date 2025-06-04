import sqlite3
import psycopg

'''
    Fonction pour créer une connexion à la database postgreSQL
    Ne prend pas de paramètres en entrée
    Retourne la connexion à la database
'''
def connectPostGre():
    return psycopg.connect("dbname=PGDB user=user password=data host=localhost port=5432")

'''def test():

    conn = connectPostGre()
    cursor = conn.cursor()
    try:
        cursor.execute("""
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
              AND table_type = 'BASE TABLE';
        """)
        tables = cursor.fetchall()
        for table in tables:
            print(table[0])  # table[0] contient le nom
    finally:
        cursor.close()
        conn.close()'''


'''
    Fonction pour récupérer les données de la base de données sqlite avec les documents.
    Prend en entrée le mot/sujet de ce que l'on recherche
    Retourne les fichiers pertinents à notre recherche
'''
def fetchDocs():
    
    return 0

'''
    Fonction pour enregistrer un client dans la base de données
    Prend en entrée les données du client nécessaire pour l'enregistrer
    Retourne l'ID du client si l'ajout à la base a fonctionné, 0 sinon
'''
def registerClient(username, mdp_hash, mail):
    conn = connectPostGre()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (mdp_hash, username, mail) VALUES (%s, %s, %s);", (mdp_hash, username, mail))
        conn.commit()
        return 1
    except psycopg.Error as e:
        print("Erreur lors de l'insertion :", e)
        return 0
    finally:
        cursor.close()
        conn.close()


'''
    Fonction pour enregistrer une session de discussion pour un client existant dans la base de données
    Prend en entrée les données nécessaire pour enregistrer la session
    Retourne l'ID de la session si l'ajout à la base a fonctionné, 0 sinon
'''
def registerSession(user_id, session_name):
    conn = connectPostGre()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO sessions (session_name, user_id) VALUES (%s, %s);", (session_name, user_id))
        conn.commit()
        return 1
    except psycopg.Error as e:
        print("Erreur lors de l'insertion :", e)
        return 0
    finally:
        cursor.close()
        conn.close()


'''
    Fonction pour enregistrer un message dans la base de données selon le sessionID et le clientID
    Prend en entrée le clientID, le sessionID, et les informations du message nécessaires pour l'enregistrer
    Retourne 1 si l'ajout à la base a fonctionné, 0 sinon
'''
def registerMsg(session_id, role, message):
    conn = connectPostGre()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO messages (session_id, role_type, msg_content) VALUES (%s, %s, %s);", (session_id, role, message))
        conn.commit()
        return 1
    except psycopg.Error as e:
        print("Erreur lors de l'insertion :", e)
        return 0
    finally:
        cursor.close()
        conn.close()
    


#Fonctions qui interagissent avec le frontend à faire plus tard

'''
    Fonction qui récupère tous les messages d'une session depuis la base de données et les retourne
    Prend en entrée : l'ID de la session
    Sortie : Liste de tous les messages (donc liste de String)
'''
def fetchMsg(session_id):
    conn = connectPostGre()
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT msg_content FROM messages WHERE session_id=%s;", (session_id,))
        return cursor.fetchall()
    except psycopg.Error as e:
        print("Erreur lors de l'insertion :", e)
        return []
    finally:
        cursor.close()
        conn.close()



'''
    Fonction qui récupère les noms des sessions d'un client depuis la base de données et les retourne
    Prend en entrée : l'ID du client
    Sortie : Liste de tous les noms de sessions (donc liste de String)
'''
def fetchSession(user_id):
    conn = connectPostGre()
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT session_name FROM sessions WHERE user_id=%s;", (user_id,))
        return cursor.fetchall()
    except psycopg.Error as e:
        print("Erreur lors de l'insertion :", e)
        return []
    finally:
        cursor.close()
        conn.close()



'''
    Fonction qui récupère le mdp et le mail d'un client et le retourne
    Fonction qui récupère les informations d'un client depuis la base de données et les retourne pour permettre son authentification
    Prend en entrée : l'ID du client
    Sortie : Liste de tous les noms de sessions (donc liste de String)
'''
def fetchClientInfo(user_id):
    conn = connectPostGre()
    cursor = conn.cursor()
    try:
        cursor.execute("SELECT username, mail, mdp_hash FROM users WHERE user_id=%s;", (user_id,))
        return cursor.fetchall()
    except psycopg.Error as e:
        print("Erreur lors de l'insertion :", e)
        return 0
    finally:
        cursor.close()
        conn.close()