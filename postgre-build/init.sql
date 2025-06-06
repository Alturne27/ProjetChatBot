create table users (
  user_id SERIAL PRIMARY KEY,
  mdp_hash varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  mail varchar(255) UNIQUE NOT NULL
);

create table sessions (
  session_id SERIAL PRIMARY KEY,
  session_name varchar(255) NOT NULL,
  user_id integer NOT NULL references users(user_id)
);

create table messages (
  msg_id SERIAL PRIMARY KEY,
  session_id integer NOT NULL references sessions(session_id),
  role_type varchar(20) NOT NULL CHECK (role_type IN ('user', 'IA')),
  msg_content TEXT,
  time_stamp timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);
