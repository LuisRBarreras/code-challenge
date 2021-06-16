----------------------------------------
-- Hypertable to store sensor metrics
----------------------------------------
-- Step 1: Define regular table
CREATE TABLE IF NOT EXISTS sensor_metrics (
   time TIMESTAMP WITHOUT TIME ZONE NOT NULL,
   power double PRECISION NULL,
   temp double PRECISION NULL,
   humidity int NULL,
   light int NULL,
   co2 double PRECISION NULL,
   dust double PRECISION NULL
);

-- Step 2: Turn into hypertable
SELECT create_hypertable('sensor_metrics','time');