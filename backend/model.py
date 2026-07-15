# Trained Linear Regression Model

w = 2.5898
b = 1.6697


def predict(distance):
    """
    Predicts cab fare based on distance.
    """

    fare = w * distance + b
    return round(fare, 2)