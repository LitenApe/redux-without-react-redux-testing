# Are we bad at using redux?

Logic related to state management and redux has a tendency to creep into all of our view components,
but should it be like that? Should the view component itself know that it has to dispatch an action to
to achieve it's goal? Honestly, it should not. In a perfect world, out view components won't know anything
about what kind of state management tool is in use and how it operates. All it should know is that it has
to call a function to achieve it's goal, and pass responsibility over to the executed function to handle
the rest.

This is simply a lightweight proof of concept to verify that you can actually use redux without react-redux.
And why does that matter? Simply to get you to start thinking of how you structure your actions and state
management logic. Dispatching of actions does not need to occur inside the view component, simply because
"that is where i can access `dispatch`". All these logic that the view component has nothing to do with can
be hidden away quite easily! Simply access the dispatch function that is defined on the store object!.

Reading the state, however, is still a little bit of a question. What would be the best approach to read the state?
is `useSelector` the best way to go about it? Might be, but you could also write your own `Provider` and access the
`state` quite easily as i've done in my proof of concept.

You could argue that react-redux has alot of performance optimisation through `Provider` and `useSelector`, and that
might be true, but did you think of that as the only option and that is why you are using it? or are you using it just
because their documentation said so?
