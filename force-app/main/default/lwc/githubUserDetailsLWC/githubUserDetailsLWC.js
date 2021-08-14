import { LightningElement, track, api } from 'lwc'; 

export default class GithubUserDetailsLWC extends LightningElement {

    testData = {
        "login": "Ronak-Toshniwal",
        "id": 73140231,
        "node_id": "MDQ6VXNlcjczMTQwMjMx",
        "avatar_url": "https://avatars.githubusercontent.com/u/73140231?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Ronak-Toshniwal",
        "html_url": "https://github.com/Ronak-Toshniwal",
        "followers_url": "https://api.github.com/users/Ronak-Toshniwal/followers",
        "following_url": "https://api.github.com/users/Ronak-Toshniwal/following{/other_user}",
        "gists_url": "https://api.github.com/users/Ronak-Toshniwal/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Ronak-Toshniwal/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Ronak-Toshniwal/subscriptions",
        "organizations_url": "https://api.github.com/users/Ronak-Toshniwal/orgs",
        "repos_url": "https://api.github.com/users/Ronak-Toshniwal/repos",
        "events_url": "https://api.github.com/users/Ronak-Toshniwal/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Ronak-Toshniwal/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Ronak Toshniwal",
        "company": null,
        "blog": "https://www.linkedin.com/in/ronak-toshniwal-4901aa109/",
        "location": "Jaipur, India",
        "email": null,
        "hireable": true,
        "bio": null,
        "twitter_username": null,
        "public_repos": 12,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2020-10-19T20:47:16Z",
        "updated_at": "2021-08-13T12:44:24Z"
      }

        gitURL = 'https://api.github.com/users/'
        data = []
        repoData;
        @track userId = "Ronak-Toshniwal"; //default page will show this user details when search box is filled with some data it replace will that value 
        connectedCallback(){
           this.fetchData();

            setTimeout(() => console.log('timeout', this.repoData), 2000)
            console.log('callback', this.data);
                    
        }

        async fetchData(){
            let response = await fetch(this.gitURL + this.userId )  //this.gitURL + this.userId
            let repos = await fetch(this.gitURL+ this.userId + "/repos");
            if(response.ok){
                this.data = await response.json();
              
            } else {
                console.error('error')
            }
            if(repos.ok){
                this.repoData = await repos.json(); 
                 
                console.log('link', this.gitURL+ this.userId + "/repos")
            } else {
                console.error('error in repos')
            }
        }

        userUpdate(e){
             this.userId = e.target.value;
                return this.userId;
        }

        btnClicked(){
             this.fetchData();
          
        }
}