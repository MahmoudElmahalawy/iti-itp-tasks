#include <iostream>
using namespace std;

int main(){
    int number, min_num = 0, max_num = 0, temp;

    cout<<"Enter a multi-digit number: \n";
    cin>>number;

    min_num = number % 10;

    do {
        temp = number % 10;
        if (temp > max_num){
            max_num = temp;
        }

        if (temp < min_num){
            min_num = temp;
        }
        number /= 10;
    }while (number % 10 != 0 || number >= 10);

    cout<<"MIN NUM: "<<min_num<<endl;
    cout<<"MAX NUM: "<<max_num;

    return 0;
}


