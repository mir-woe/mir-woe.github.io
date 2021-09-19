import os

def main():
    for filename in os.listdir('../images/drawings'):
        if filename.endswith('.jpg'):
            print (filename)