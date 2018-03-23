import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
#import seaborn as sns
#%matplotlib inline
from sklearn import model_selection
from sklearn import ensemble
from sklearn import linear_model


test = pd.read_csv('../input/test.csv')
train = pd.read_csv('../input/train.csv')
full = train.append(test, ignore_index = True)
titanic = full[:891]

#Hack to keep passenger id for submission
#del test, train
del train

print('Dataset \'full\' shape:', full.shape)
print('Dataset \'titanic\' shape:', titanic.shape)