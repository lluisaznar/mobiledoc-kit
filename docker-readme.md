# **Build dev environment**

**1.** Build service's image
    
    `docker-compose build --no-cache`

**2.** install npm dependencies
    
    `./npm install`

**2.** build demo
    
    `./npm run build:website`

**4.** run container
    
    `docker-compose up -d`

***

# **Commands**

### View container's log
    docker-compose logs -f

### Connect to running container's bash as **node**
    ./bash node