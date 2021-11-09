            /**
             * Using in this project script:
             *  • Template literals (template string)
             *  • Arrow functions
             *  • Arrays
             *  • objects
             *  • DOM
             *  • Fetch (Github API)
             *  • Promises
             * 
             */

            const linksSocialMedia = { //object containing all variables for each social media link in the page. In this project, this object will be used to determine and change dynamically  all social media links
                github: "Abraao-S",
                youtube: "channel/UCAmDcPH8SWeFALazpY_n-_Q",
                instagram: "braonis.guitarra",
                facebook: "home",
                twitter: "abraao_96"
            }

            function changeSocialMediaLinks(){ //github not included here!
                for (let li of socialLinks.children){ //goes through each children of the ul tag (id=socialLinks) and assigns it's value to the li variable. Here, these values are the full content from each li tag
                    const social = li.getAttribute('class');
                        //assigns in variable "social" the class name for each li element inside the ul element

                    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`; 
                        //goes to the current li element, takes the first element using identifier [0] and changes the href attribute value to the template string. Inside the template string is the variable social which identifies the name for the current social media and use it as the URL, then goes to the object "linksSocialMedia" and takes the value corresponding to the attribute that matches the social name.                    
                }
            }

            function getGithubProfileInfos(){   //replaces Name, Github login name and link, photo and bio using the Github public API 
                const url = `https://api.github.com/users/${linksSocialMedia.github}`;

                fetch(url)
                .then(response => response.json())
                .then(data => {
                    userName.textContent = data.name;   //accessing DOM using the "userName" id in the h1 element on HTML. Here it's possible to just type the id (in this case "userName") that Javascript will take that as an id for an HTML element
                    userBio.textContent = data.bio;
                    userGithubLink.href = data.html_url;    //changing ONLY the link, not the name it displays
                    userPhoto.src = data.avatar_url;        
                    //userGithubLink.textContent = data.login;  //doing it that way will cause the github icon to be overwritten
                    userGithubName.textContent = data.login;
                })
            };

            //executing the functions to change all social media links to my personal links
            changeSocialMediaLinks();
            getGithubProfileInfos();