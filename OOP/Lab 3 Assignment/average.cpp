#include <iostream>
using namespace std;

int main(){
    int number, sum = 0, i = 1;



    do {
        cout<<"Enter a number: \n";
        cin>>number;

        sum += number;

        cout<<"Average = "<<sum/i<<endl;

        i++;


    }while (true);

    return 0;
}


