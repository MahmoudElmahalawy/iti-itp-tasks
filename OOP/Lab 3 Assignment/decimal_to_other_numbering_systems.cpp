#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main(){
    int number, base_number;
    stack<string> remainder;

    cout<<"Enter the number in decimal numbering system: \n";
    cin>>number;
    cout<<"Enter the base number of the system you want to convert to (MAX BASE IS 16): \n";
    cin>>base_number;

    if (base_number > 16){
        cout<<"MAX BASE NUMBER IS 16"<<endl;
        return 0;
    }

    cout<<"\n-------\nNumber after converting to base "<<base_number<<" is ";

    do {
//        cout<<number % base_number;
        if (base_number <= 10){
            remainder.push(to_string(number % base_number));

        }else{
            if (number % base_number > 9){
                switch (number % base_number){
                case 10:
                remainder.push("A"); break;
                case 11:
                remainder.push("B"); break;
                case 12:
                remainder.push("C"); break;
                case 13:
                remainder.push("D"); break;
                case 14:
                remainder.push("E"); break;
                case 15:
                remainder.push("F"); break;
                }
            }
            remainder.push(to_string(number % base_number));
        }

        number /= base_number;

    }while (number > 0);

    while (!remainder.empty()) {
        cout << remainder.top();
        remainder.pop();
    }

    return 0;
}
