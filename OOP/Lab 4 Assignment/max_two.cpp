#include <iostream>
using namespace std;

int max_two(int x, int y);

int main(){
    int x, y;
    cout<<"Enter first number:\n";
    cin>>x;
    cout<<"Enter second number:\n";
    cin>>y;

    cout<<"MAX NUM IS "<<max_two(x, y);

    return 0;
}

int max_two(int x, int y){

    if (x > y)
        return x;
    else
        return y;
}

