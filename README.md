![](https://github.com/Bogdan18b/Project_Zebra/blob/master/pics/logo.png)

 IKE! is a full-stack single page social media application, based on YELP, which allows users to submit reviews about local businesses. I used React and Redux for the frontend and Ruby on Rails and Postgresql for the backend.
You have a live demo [here](https://project-ike.herokuapp.com/#/). Feel free to login as a guest and add a few comments or just browse.

# Features
This is my home page search menu:

![](https://github.com/Bogdan18b/Project_Zebra/blob/master/pics/home.png)

The search bar lets you find businesses by name or by category. You also have a list with a few business categories. A search for Avra takes you to the Avra show page

![](https://github.com/Bogdan18b/Project_Zebra/blob/master/pics/business_show.png)

One cool feature that I implemented here is to change the class name of each of the 3 pictures on mouse over and mouse out, so you can have the picture you want to see in a bigger size than the other 2:

           <img onMouseOver={() => this.setState({1: 'hovered', 2: '', 3: ''})}
              onMouseOut={() => this.setState({1: '', 2: 'hovered', 3: ''})}
              className={this.state[1]}
              src={business.photos[0]}
              alt="coming soon"
           />

            <img src={business.photos[1]}
              className={this.state[2]}
              alt="coming soon"
            />

            <img onMouseOver={() => this.setState({1: '', 2: '', 3: 'hovered'})}
              onMouseOut={() => this.setState({1: '', 2: 'hovered', 3: ''})}
              className={this.state[3]}
              src={business.photos[2]} alt="coming soon"
            />

Another page available to you is the business page, which you can see below:

![](https://github.com/Bogdan18b/Project_Zebra/blob/master/pics/business_index.png)

The search bar on top of the page is similar with the home page search bar, and the logo redirects to the home page.
A logged in user will have an option to submit a review for a business, as well as rate it:

![](https://github.com/Bogdan18b/Project_Zebra/blob/master/pics/review_form.png)

Future updates include a user profile page, where the user will have the option to edit or delete his reviews.
