#include <iostream>
using namespace std;

int main(){
    int number, max_num = 0, temp;

    cout<<"Enter a multi-digit number: \n";
    cin>>number;

    do {
        temp = number % 10;
        if (temp > max_num){
            max_num = temp;
        }
        number /= 10;
    }while (number % 10 != 0 || number >= 10);

    cout<<"\nMAX NUM IS "<<max_num;

    return 0;
}


