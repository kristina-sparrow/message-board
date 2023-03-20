import cors from "cors";

const allowedOrigins = ["https://messageboard-ks.onrender.com"];

export const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};
