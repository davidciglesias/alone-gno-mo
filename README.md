# Description

The main social network of the gnome-torious town of Brastlewark!

# Motivation

This is the outcome of the following exercise:

## Brastlewark Social Network

> When playing a fantasy role-playing game, every time the heroes arrive at a town, they have the following issue: They don't know the local population and what they can do to help them on their adventures.
>
> In this example, our heroes just arrived at a Gnome town called Brastlewark. To facilitate trade with the local population they need an easy way to browse all of the inhabitants details. We've found a server providing all the census data of Brastlewark and stored it within this repository at `/data/brastlewark.json`.
>
> Gnomes in this town are not really social because they have too much work to do. That's the reason they can have more than one job and might have few or even no friends at all. They also appreciate their privacy so they have used some random images from internet, not specifically optimized for mobile devices, for their profile. (They are very modern in some aspects and they have smartphones and access to internet for instance). Please write an application to help our heroes!

### High level specifications

- Retrieve data from the JSON provided. It is provided as an static json, but assume it might change randomly. Do not retrieve it directly as a file, but rather as a public GitHub resource.
- Show this data in the most user-friendly way you could think. Keep in mind our heroes will be quite busy dealing with monsters, so the app has to be really simple and easy to use. At the very least, it would be good to quickly browse (and even filter) all the individuals and be able to see the details of each one.

### Additional details

- Be creative!
- Ul must not blocked by network connections or long operations.
- Images coming from network should cached to improve performance.
- Snappiness & responsiveness over sluggishness & idleness.
- Use the framework you feel more comfortable using.
- Make visible the use of HTML & CSS.
- ES6 is highly recommended.
- Add minimum tests to the app. We expect to have a minimum documentation on a README file. We need to know what have you done and how to run your app. Also, if you have taken any decision or could not meet any of requirements, please explain it to us!
- Use Github or any source control tool. It would be great if we can see incremental steps.
- Determine gender of gnomes (just joking on this one but feel free to make your guess)
