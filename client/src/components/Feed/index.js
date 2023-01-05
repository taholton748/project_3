import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import logo from '../Navigation/PlaceBook.png';

function FeedExampleBasic() {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label>
          <img src={logo} alt="alt text" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Taylor Guy</Feed.User>
            added you as a friend
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" />
              4 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image="" />
        <Feed.Content>
          <Feed.Summary>
            <a href="_">Paul Todd</a>
            added
            <a href="_">2 new illustrations</a>
            <Feed.Date>4 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra images>
            <a href="_">
              <img src={logo} alt="alt text" />
            </a>
            <a href="_">
              <img src={logo} alt="more alt text" />
            </a>
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" />
              1 Like
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image="" />
        <Feed.Content>
          <Feed.Summary
            date="2 Days Ago"
            user="Alex Defrese"
            content="added you as a friend"
          />
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" />
              8 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image="/images/avatar/small/joe.jpg" />
        <Feed.Content>
          <Feed.Summary>
            <a href="_">Jonathan Keku</a>
            posted on his page
            <Feed.Date>3 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            Ours is a life of constant reruns. We are always circling back to
            where we had started, then starting all over again. Even if we
            do not run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" />
              5 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image="/images/avatar/small/justen.jpg" />
        <Feed.Content>
          <Feed.Summary>
            <a href="_">Peeping Tom</a>
            added
            <a href="_">2 new photos</a>
            of you
            <Feed.Date>4 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra images>
            <a href="_">
              <img src={logo} alt="all the alt text" />
            </a>
            <a href="_">
              <img src="/images/wireframe/image.png" alt="the most alt text" />
            </a>
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" />
              41 Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default FeedExampleBasic;
