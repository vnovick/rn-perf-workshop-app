# Welcome to the Performance Optimization Workshop!

By Vladimir Novick @[NovickLabs](novicklabs.com)

In this workshop, you'll learn the best practices and strategies to optimize React Native applications. Through hands-on exercises, you'll identify, measure, and improve performance bottlenecks within an app.

Slides:
[https://slides.com/vladimirnovick/debug/](https://slides.com/vladimirnovick/debug/)

## Exercises

### Exercise 1: HomeScreen Optimization

- **Task**: Find and improve re-rendering issues on the HomeScreen.
- **Steps**:
  - Identify where re-rendering is happening on the HomeScreen.
  - Record performance metrics programmatically **and** take screenshots from React Dev Tools.
  - Optimize all components on HomeScreen to minimize re-renders.

### Exercise 2: ProfileScreen Optimization

- **Task**: Optimize re-rendering within the ProfileScreen.
- **Steps**:
  - Find where re-rendering is occurring on the ProfileScreen, focusing especially on list components.
  - Improve re-rendering efficiency for all components on the ProfileScreen.
  - Record performance metrics demonstrating your improvements.

_Open a PR on GitHub with your solutions and screenshots for Exercises 1 & 2._

### Exercise 3: Global App Optimization

- **Tasks**:

  - Improve all animations across the app to use native drivers.
  - Deliberately call the `performExpensiveComputation` function, record FPS metrics before and after improvements.
  - Optimize the app: eliminate memory leaks, reduce unnecessary re-renders, minimize bundle size.

- **Bonus Homework**: For animations that cannot be offloaded to the UI thread, use Reanimated library to optimize them.

_Reply to your GitHub issue with screenshots of your measurements and improvements for Exercise 3._

## Helpful Links

- [React DevTools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)
- [Reanimated Library](https://docs.swmansion.com/react-native-reanimated/)
- [Flipper](https://fbflipper.com/) - A powerful platform for debugging iOS, Android, and React Native apps.
- [React Native Flipper Performance Monitor](https://github.com/bamlab/react-native-flipper-performance-monitor) - A Flipper plugin to monitor React Native app performance.
- [React Native Bundle Visualizer](https://github.com/IjzerenHein/react-native-bundle-visualizer) - Visualize the contents of your React Native bundle to understand and optimize your app's size.

> Note in order to run bundle analyzer you run it with:
> npx react-native-bundle-visualizer@3.1.0

### Let's get started and happy coding!
