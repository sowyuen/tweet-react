class Tweet extends React.Component {

    render() {
        let itemsElements = this.props.items.map(item => {
            var name = item.user.name;
            var username = item.user.screen_name;
            var text = item.text;
            var profilePic = item.user.profile_image_url;
            var retweet = item.retweet_count;
            var favourite = item.favorite_count;
            var comments = item.user.listed_count;

            return (
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-2">
                                <img className="m-2 rounded-circle" src = {profilePic} height="100" width="100"/>
                                </div>

                                <div className="col">
                                    <div className="row m-2">
                                        <h1 class="m-2">{name}</h1>
                                        <h1><img src = "https://abeon-hosting.com/images/instagram-verified-symbol-png-2.jpg" height="30" width="30"/></h1>
                                        <p class="m-1 my-auto">@{username}</p>
                                    </div>

                                    <div className="row m-2">
                                    <p className="m-3">{text}</p>
                                    </div>

                                    <div className="row">
                                        <p class="col-3"><img src = "https://www.seekclipart.com/clipng/middle/124-1244154_topic-icons-twitter-comment-icon-png-clipart.png" height="42" width="42"/>{comments}</p>
                                         <p class="col-3"><img src = "https://cdn0.iconfinder.com/data/icons/interface-editing-and-time-1/64/retweet-arrow-twitter-512.png" height="42" width="42"/>{retweet}</p>
                                        <p class="col-3"><img src = "https://cdn3.iconfinder.com/data/icons/simple-line-3/32/Favourite_favourites_heart_like_liked-512.png" height="42" width="42"/>{favourite}</p>
                                        <p class="col-3"><img src = "https://static.thenounproject.com/png/55611-200.png" height="35" width="35"/></p>
                                    </div>

                                </div>
                             </div>
                        </div>
                    </div>
             )
         });
         return (
         <div class="col-8 mx-auto">
         {itemsElements}
         </div>
         );
     }
 }

 ReactDOM.render(
 <Tweet items={tweets}/>,
 document.getElementById('root')
 );