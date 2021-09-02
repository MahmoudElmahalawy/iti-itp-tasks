#include <iostream>
using namespace std;

int main(){
    int input_length, i, j;
    int counter = 0;

    cout<<"How many numbers are you going to enter?\n"<<endl;
    cin>>input_length;

    int numbers_list[input_length];
    int seen_list[input_length];

    for (i=0; i<input_length; i++){
        cout<<"Enter a new number"<<endl;
        cin>>numbers_list[i];

        seen_list[i] = 0;
    }

    cout<<"----------\nDUPLICATES ARE\n\n";
//    <<"Number\tCount\n"

    for(int i = 0; i < input_length; i++) {
        if (seen_list[i] == 0) {
            counter = 0;
            for (int j = i; j < input_length; j++)
                if (numbers_list[j] == numbers_list[i]) {
                    counter += 1;
                    seen_list[j] = 1;
                }
                if (counter > 1)
                    cout << numbers_list[i] << " occurs " << counter << " times" << endl;
        }
    }


    return 0;
}
