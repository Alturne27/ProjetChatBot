-- SQLBook: Code
-- CreateTable
CREATE TABLE "ChatSession" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ChatSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "chatSessionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
-- ALTER TABLE "ChatSession" ADD CONSTRAINT "ChatSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_chatSessionId_fkey" FOREIGN KEY ("chatSessionId") REFERENCES "ChatSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Créer quelques sessions de chat
INSERT INTO "ChatSession" ("id", "title", "userId")
VALUES
    ('session-001', 'Discussion sur Python', 'user-001'),
    ('session-002', 'Aide Docker', 'user-001'),
    ('session-003', 'Questions SQL', 'user-002');

-- Ajouter des messages pour la première session
INSERT INTO "ChatMessage" ("id", "chatSessionId", "message", "role", "createdAt")
VALUES
    ('msg-001', 'session-001', 'Comment puis-je créer une API avec FastAPI?', 'user', '2023-10-01 10:00:00'),
    ('msg-002', 'session-001', 'FastAPI est un framework moderne pour créer des API. Commencez par installer FastAPI avec pip et uvicorn comme serveur.', 'assistant', '2023-10-01 10:01:00'),
    ('msg-003', 'session-001', 'Merci! Et comment définir des routes?', 'user', '2023-10-01 10:02:00'),
    ('msg-004', 'session-001', 'Utilisez les décorateurs @app.get(), @app.post(), etc. pour définir vos routes.', 'assistant', '2023-10-01 10:03:00');

-- Ajouter des messages pour la deuxième session
INSERT INTO "ChatMessage" ("id", "chatSessionId", "message", "role", "createdAt")
VALUES
    ('msg-005', 'session-002', 'Comment reconstruire mes conteneurs Docker sans cache?', 'user', '2023-10-02 14:30:00'),
    ('msg-006', 'session-002', 'Utilisez la commande docker-compose build --no-cache suivie de docker-compose up', 'assistant', '2023-10-02 14:31:00'),
    ('msg-007', 'session-002', 'Merci, ça fonctionne!', 'user', '2023-10-02 14:35:00');

-- Ajouter des messages pour la troisième session
INSERT INTO "ChatMessage" ("id", "chatSessionId", "message", "role", "createdAt")
VALUES
    ('msg-008', 'session-003', 'Comment faire une jointure entre deux tables?', 'user', '2023-10-03 09:15:00'),
    ('msg-009', 'session-003', 'Utilisez la syntaxe SELECT * FROM table1 JOIN table2 ON table1.id = table2.id', 'assistant', '2023-10-03 09:16:00');