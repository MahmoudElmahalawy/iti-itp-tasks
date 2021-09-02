#include <iostream>
using namespace std;

int main(){
    int input_length, i;

    cout<<"How many numbers are you going to enter?\n"<<endl;
    cin>>input_length;

    int temp;
    int numbers_list[input_length];

    for (i=0; i<input_length; i++){
        cout<<"Enter a new number"<<endl;
        cin>>temp;

        numbers_list[i] = temp;
    }

    cout<<"----------\n";

    for (i=input_length-1; i>=0; i--){
        cout<<numbers_list[i]<<endl;
    }

    return 0;
}
