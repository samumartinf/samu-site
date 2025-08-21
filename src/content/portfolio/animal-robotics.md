---
title: "Animal inspired robotics. An interactive simulation for BIOE97156"
description: "Interactive simulation for BIOE97156. Target interception algorithms and real-world robot implementation with computer vision and obstacle avoidance."
image: "/images/robotSimulation/banner_animal_robotics.jpeg"
tags: ["Python", "Computer Vision", "Robotics"]
slug: "animal-robotics"
---

# {title}

This is meant to be an auxiliary short explanation and discussion about target interception for Imperial College's module on Animal Locomotion and Bioinspired Robotics (ALBiR).

## Part 1: Simulation of target interception
For the simulation seen below, the robot is initially positioned as specified in the coursework. Hitting the "Play" button will start the simulation with default settings. These are: robot and prey position as per specification on coursework (120cm away from each other), robot speed is 100cm/s, prey speed is 70cm/s, the robot's controller only has PI gain and the prey follows a straight path. However, there are also buttons on the side that allow for the modification of the simulation, these are:

* Play: Start the timer and simulation
* Fixed Init: If active the robot and prey will be positioned as per specification in the coursework
  * When deactivated, the user can place the robot, prey and obstacle in a position of their liking
* Reset: Stop the simulation and timer and set simulation back to the original state
* C. Bearing: Activate the constant bearing pursuit  (+15deg)
* Proportional: When activated the robot controller only has D gain
* Fast prey: When activated increases the prey speed from 70cm/s to 100cm/s
* Sinusoidal prey: Prey follows a sinusoidal path instead of straight line

### The Effect of different variables in time-to-capture:

The simulation seen here is quite flexible and allows us to generate different scenarios on the go. Playing the simulation as it starts by default is one of the most naive implementations of the algorithm, with the slower prey the time-to-capture (TTC) is 1.43s and when the robot is set to the fast setting the TTC is 3.09. However, if a constant bearing is applied, the TTC are significantly reduced, especially the one with the faster prey, which are now 1.03s and 1.43s respectively.

The effect of the sinusoidal path is harder to measure as it depends greatly on the starting position of the robot, the reader is therefore encouraged to tinker around with the initial conditions by deactivating the "Fixed init" and observing the results. However, here again the constant bearing can massively improve the TTC, to the point that if set to the fastest settings, without the constant bearing the robot may not be fast enough to catch the moving target. 

### Sensorimotor delay

Sensorimotor delay can be one of the main challenges in robotics. Real-time information is hard (rather, impossible) to have and the best we can do is try to reduce this delay. However, there are multiple ways to reduce the effect of such delay, for instance, adding a differential gain can introduce a type of "prediction" to our controller that could take care of small latencies in the sensing and/or processing.

### Real-world Implementation

During the spring term of 2020 in ALBiR we studied the different ways locomotion and environment perception work in the animal kingdom. From biped motion, to visual recognition and target pursuit, we have explored Nature's solution for these problems. Inspired by Nature, we were expected to take what we had learnt and use it in the real world.

A small robot was built using two brush motors, a Raspberry Pi and a Pixy2 camera attached to a servo. Our aim was to make the robot a competent predator by implementing target tracking algorithms that work in the real world.

![Distance calculation](/images/robotSimulation/distanceCalculation.png)

The robot requires two different controllers to work properly. The first controller manages the "head" (the servo motor attached to the camera), whereas the second controller manages the robot's body position by setting the turning rate of the wheels to steer left or right.

<iframe width="560" height="315" src="https://www.youtube.com/embed/y9JwQ56jD2o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Obstacle Avoidance

The principle used in our implementation is rather simple: the robot follows the prey, but if an obstacle is within a certain threshold, we modify the trajectory to avoid bumping into it without disrupting our time-to-capture.

![Path Choice](/images/robotSimulation/pathChoice.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/qktChqYHf8I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>