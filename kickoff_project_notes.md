# Sidewalk Sailors
## Notes from Spitball Session

### Responsibilities
* Coding Style & Naming Conventions Overseer (Bryan)
* README (Bryan)
* Trello, Git, Project Mgr (Maria)
* Front End: Jaytee and Maria
* Back End: Bryan and Phil

### Logo
![Sidewalk Sailors](https://i.imgur.com/0ETpRGT.png)

## Wireframe

**home page**
![home page](https://i.imgur.com/M4gpkx9.png)

**register page**
![register show page](https://i.imgur.com/1m2KsZC.png)

**treasure show page**
![treasure show page](https://i.imgur.com/6qBNBzU.png)

**about page**
![about page](https://i.imgur.com/VpPu6JR.png)

**user show page**
![user show page](https://i.imgur.com/rTvjWJn.png)

**user edit page**
![user edit page](https://i.imgur.com/2YwX7Y3.png)



## Sidewalk Sailors Github
https://github.com/mariawhen/sidewalk_sailors

### App Statement
*(come with variations on Sunday)*
Our mission is to facilitate "one man't trash is another man's treasure" through an online community.

There will be a 1 day expiration of posts. **After 24 hours from posting** the `archived` property's `boolean` value in the `treasures` table will be set to `false`.
* this will be a timestamp

## User Stories
(ideas for future User Stories - need to be reworked into proper User Story format)
* remove stuff from list
* login, log out, register
* find things
  * by location box?
  * by date?
* on item load, track popular items (featured items?)
* CRUD users
* CRUD items
* star system (1-5 stars)
  * reliability meter (icebox)
  * count?
* follow (icebox)
  * Hartl tutorial video has example of how this is done
* points for photo posts! (icebox)

### Good user stories:
As a Pirate, I want to be able to:
* Add photos of treasure so people can pick it up.

## Models
**Pirate**
* **username**: String
* **email**: String
* **password**: String
* **zipcode**: String
* **treasure_count**: Number

**Treasure**
* **img_url**: String
* **name**: String
* **description**: Text (140 character limit)
* **street**: String
* **city**: String
* **state**: String
* **zip**: String
* **date**: Date
* **archived**: Boolean
* **pirate_id**: Number (reference?)

**note:** instead of typing in address it would be better if we could use HTML5 and geolocation to get the longitude and latitude of where the photo was taken.
(link reference: http://viralpatel.net/blogs/html5-geolocation-api-tutorial-example/)

## Design Ideas
* LA skyline
* yellow? background blue?

## Icebox
* find things by date
* reliability meter
* follow
* points for photo posts
* html5 geolocation
* like up/down
* pirate ranking
* avator based on ranking
* sound clips on click
* treasure hunt
* walk the plank (bad users)
* if people delete their account, they get this message "Are you sure you want to walk the plank"
* when someone log's in or registers, they are greeted with "Ahoy Matie!"

**Pirate rankings**
1. Captain
2. Quarter Master
3. Sailing Master
4. Boatswain
5. Carpenter & Surgeon
6. Master Gunner
7. Mate
8. A.B.S (Able Bodied Sailor)
9. Rigger
10. Cabin Boy
11. Powder Monkey
12. Swabbie
