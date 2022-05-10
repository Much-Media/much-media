# much-media
Centralized platform for sharing recommendations and ratings for all media types with friends

### User Profile Page

![image](https://user-images.githubusercontent.com/11655553/167235402-3db055cd-c0d9-4783-bb2a-65bb4c0d340c.png)

![image](https://user-images.githubusercontent.com/101016958/167738815-577d3b22-f00e-444d-a552-6ee6c10879b4.png)


### Create Db
![image](https://user-images.githubusercontent.com/101016958/167738940-54bafa01-4980-4063-9ec3-25b269e51672.png)

```
CREATE TABLE "public.User" (
	"_id" serial NOT NULL,
	"username" varchar(15) NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.reviews" (
	"_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"media_id" int NOT NULL,
	"review" varchar(255) NOT NULL,
	"rating" int NOT NULL,
	CONSTRAINT "reviews_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Media" (
	"_id" serial NOT NULL,
	"type" varchar NOT NULL,
	"title" varchar(255) NOT NULL,
	CONSTRAINT "Media_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Following" (
	"_id" serial NOT NULL,
	"subscriber" int NOT NULL,
	"subscribee" int NOT NULL,
	CONSTRAINT "Following_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("user_id") REFERENCES "User"("_id");
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk1" FOREIGN KEY ("media_id") REFERENCES "Media"("_id");


ALTER TABLE "Following" ADD CONSTRAINT "Following_fk0" FOREIGN KEY ("subscriber") REFERENCES "User"("_id");
ALTER TABLE "Following" ADD CONSTRAINT "Following_fk1" FOREIGN KEY ("subscribee") REFERENCES "User"("_id");
```

### LOGIN API
###### Request
```
{
  username: 'username'
  password: 'password'
}
```

###### Response
```
Status 200 // Means Good
Status 400 // Means Error
```
