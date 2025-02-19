CREATE TYPE "public"."status" AS ENUM('available', 'sold', 'reserved');--> statement-breakpoint
CREATE TYPE "public"."fuel_type" AS ENUM('gasoline', 'hybrid', 'electric');--> statement-breakpoint
CREATE TYPE "public"."transmission" AS ENUM('manual', 'automatic');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "cars" (
	"id" uuid PRIMARY KEY NOT NULL,
	"model" varchar(255) NOT NULL,
	"brand" varchar(255) NOT NULL,
	"year" integer NOT NULL,
	"price" numeric NOT NULL,
	"mileage" integer DEFAULT 0 NOT NULL,
	"fuel_type" "fuel_type" NOT NULL,
	"transmission" "transmission" NOT NULL,
	"status" "status" NOT NULL,
	"picture" varchar(255) NOT NULL,
	"color" varchar(30) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp,
	"deleted_at" timestamp,
	CONSTRAINT "cars_brand_unique" UNIQUE("brand")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" "role" DEFAULT 'user' NOT NULL,
	"phone_number" varchar(20) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp,
	"deleted_at" timestamp,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
