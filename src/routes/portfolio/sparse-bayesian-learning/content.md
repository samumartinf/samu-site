# ODE Composer: estimating ODE systems from data

This project was the result of my Master's thesis. It provides a framework for model identification in analytical form. It uses statistical methods for estimating the ODE system. By the end, it provides the user with a fully human understandable ODE describing the system.

## Project Overview

In the realms of engineering and biology, understanding complex systems through nonlinear system identification is crucial. Traditional methods often falter, especially when data is scarce or hard to gather—a frequent challenge in biological research. Recognizing the need for a method that works in such constrained scenarios and yields results that researchers can easily interpret, our latest project introduces an innovative two-step approach. Initially, we enhance noisy data through a novel derivative estimation technique using Gaussian Processes. Following this, Sparse Bayesian Learning aids in identifying significant features, enabling the discovery of the system's analytical representation. Our method culminates in the formulation of Ordinary Differential Equations (ODEs), offering a clear, understandable model of the system dynamics. This tool not only simplifies the analysis of crucial system properties like stability but also marks a step forward in making complex system identification more accessible and interpretable for researchers.

## The code

This is an example on how to use the Python package to estimate ODE systems from data. The code is available in the [Github Repository](https://github.com/samumartinf/ode_composer_py)

```python
from ode_composer.statespace_model import StateSpaceModel
from scipy.integrate import solve_ivp
from ode_composer.dictionary_builder import DictionaryBuilder
from ode_composer.sbl import SBL
from ode_composer.measurements_generator import MeasurementsGenerator
import matplotlib.pyplot as plt
import numpy as np
import time
from ode_composer.signal_preprocessor import (
    GPSignalPreprocessor,
    RHSEvalSignalPreprocessor,
    SplineSignalPreprocessor,
)
```

## Intro

In this sample we use a [Lotka-Volterra](https://en.wikipedia.org/wiki/Lotka–Volterra_equations) model. We will show how to generate the State Space model, generate measurements using the MeasurementsGenerator and finally show the workflow for preprocessing the signals and generating the analytical results.

```python
# Define the Lotka-Volterra model and generate the StateSpaceModel object
states = {"x1": "alpha*x1-beta*x1*x2", "x2": "delta*x1*x2-gamma*x2"}
parameters = {"alpha": 2 / 3, "beta": 4 / 3, "delta": 2, "gamma": 1}
ss = StateSpaceModel.from_string(states=states, parameters=parameters)
print("Original Model:")
print(ss)
```

The model we will try to estimate now is: 

```
dx₁/dt = (4/3)x₁x₂ + (2/3)x₁
dx₂/dt = 2x₁x₂ - x₂
```

## Signal preprocessing

As mentioned, the package also provides the ability to preprocess the signal. The SBL algorithm will adjust the sparsity penalty based on the noise of the signal. We can use Gaussian Processes to estimate the noise of a signal after optimizing a Kernel over our data. Additionally, GP's mean can provide a great starting point for calculating the time derivative of noisy signals.

![Gaussian Process Results](/images/sbl/Intro_8_0.png)

![Derivatives Estimation](/images/sbl/Intro_8_1.png)

![Second State Derivatives](/images/sbl/Intro_8_2.png)

## Results

As we can see, the SBL algorithm can be an optimal way of estimating the parameters of a model. The package provides a simple way of generating the State Space model, generating measurements and preprocessing the signals.

![Final Results](/images/sbl/Intro_12_0.png)

![Estimation vs Original](/images/sbl/Intro_12_1.png)

## Conclusion

The generated ODE model is found below, which correctly estimates the structure of the Lotka-Volterra model.

```
dx₁/dt = 0.463x₁ - 1.01x₁x₂
dx₂/dt = 1.54x₁x₂ - 0.759x₂
```

This project demonstrates the power of combining Gaussian Processes with Sparse Bayesian Learning to identify complex dynamical systems from noisy data, making it an invaluable tool for researchers in engineering and biology.