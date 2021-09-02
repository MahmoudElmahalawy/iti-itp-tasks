#include <iostream>
using namespace std;

int sum_to(int x);

int main(){
    int x;

    cout<<"Enter a number:\n";
    cin>>x;

    cout<<"Sum of numbers to "<<x<<" is "<<sum_to(x);

    return 0;
}

int sum_to(int x){

    int sum = 0;

    for (int i=1; i <= x; i++){
        sum += i;
    }

    return sum;
}


