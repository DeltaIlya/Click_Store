--
-- PostgreSQL database dump
--

\restrict q5soxkNAyJ8EbqisOhGpuVZBYZnzjiXQhcDWQ0rj5GWfS8jrGCbH8g9ZmhD8VSe

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-05-09 19:42:57

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 17965)
-- Name: Orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Orders" (
    id integer NOT NULL,
    user_id character varying(100),
    user_name character varying(255) NOT NULL,
    address character varying(500) NOT NULL,
    items json NOT NULL,
    total integer NOT NULL,
    status character varying(50) DEFAULT 'new'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public."Orders" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 17964)
-- Name: Orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Orders_id_seq" OWNER TO postgres;

--
-- TOC entry 5025 (class 0 OID 0)
-- Dependencies: 221
-- Name: Orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Orders_id_seq" OWNED BY public."Orders".id;


--
-- TOC entry 220 (class 1259 OID 17953)
-- Name: Products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Products" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    description text,
    image_url character varying(500),
    category character varying(100)
);


ALTER TABLE public."Products" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 17952)
-- Name: Products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Products_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Products_id_seq" OWNER TO postgres;

--
-- TOC entry 5026 (class 0 OID 0)
-- Dependencies: 219
-- Name: Products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Products_id_seq" OWNED BY public."Products".id;


--
-- TOC entry 4862 (class 2604 OID 17968)
-- Name: Orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders" ALTER COLUMN id SET DEFAULT nextval('public."Orders_id_seq"'::regclass);


--
-- TOC entry 4861 (class 2604 OID 17956)
-- Name: Products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products" ALTER COLUMN id SET DEFAULT nextval('public."Products_id_seq"'::regclass);


--
-- TOC entry 5019 (class 0 OID 17965)
-- Dependencies: 222
-- Data for Name: Orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Orders" (id, user_id, user_name, address, items, total, status, created_at) FROM stdin;
1	\N	Иван	Москва	[{"product_id":1,"name":"Ноутбук","price":52999,"quantity":1}]	52999	new	2026-04-29 22:52:22.607213
2	\N	Додик	Жопа с ручкой корпус 5 квартира 5	[{"product_id":2,"name":"Смартфон Apple iPhone 15","price":79990,"quantity":1}]	79990	new	2026-05-08 23:55:45.173428
3	\N	Тест2	Жопа2 впрврвавра	[{"product_id":3,"name":"Наушники Marshall Major V","price":8499,"quantity":4},{"product_id":1,"name":"16\\" Ноутбук HONOR MagicBook X16","price":52999,"quantity":4}]	245992	new	2026-05-08 23:58:02.796993
4	\N	Тест3	ДОАВЛВЛВЛЛВЛВ	[{"product_id":2,"name":"Смартфон Apple iPhone 15","price":79990,"quantity":1}]	79990	new	2026-05-09 01:56:12.169077
5	\N	Тест4	двмдвдмвавтдмтвм	[{"product_id":2,"name":"Смартфон Apple iPhone 15","price":79990,"quantity":6}]	479940	new	2026-05-09 01:57:13.933582
\.


--
-- TOC entry 5017 (class 0 OID 17953)
-- Dependencies: 220
-- Data for Name: Products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Products" (id, name, price, description, image_url, category) FROM stdin;
1	16" Ноутбук HONOR MagicBook X16	52999	AMD Ryzen 5, 16 ГБ ОЗУ, 512 ГБ SSD	https://via.placeholder.com/300x200?text=Honor	Ноутбуки
2	Смартфон Apple iPhone 15	79990	6.1" дисплей, 128 ГБ памяти	https://via.placeholder.com/300x200?text=iPhone	Смартфоны
3	Наушники Marshall Major V	8499	Беспроводные наушники	https://via.placeholder.com/300x200?text=Marshall	Аксессуары
\.


--
-- TOC entry 5027 (class 0 OID 0)
-- Dependencies: 221
-- Name: Orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Orders_id_seq"', 5, true);


--
-- TOC entry 5028 (class 0 OID 0)
-- Dependencies: 219
-- Name: Products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Products_id_seq"', 3, true);


--
-- TOC entry 4868 (class 2606 OID 17979)
-- Name: Orders Orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);


--
-- TOC entry 4866 (class 2606 OID 17963)
-- Name: Products Products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Products"
    ADD CONSTRAINT "Products_pkey" PRIMARY KEY (id);


-- Completed on 2026-05-09 19:42:57

--
-- PostgreSQL database dump complete
--

\unrestrict q5soxkNAyJ8EbqisOhGpuVZBYZnzjiXQhcDWQ0rj5GWfS8jrGCbH8g9ZmhD8VSe

