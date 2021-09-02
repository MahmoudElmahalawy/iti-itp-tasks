#include <iostream>
using namespace std;

int main()
{
    float num;

    cout<<"\nEnter a number: "<< endl;
    cin>>num;

    if (num == 0) {
        cout<<"\nThe number is Zero"<< endl;
    }else if (num > 0) {
        cout<<"\nThe number is Positive"<< endl;
    }else {
        cout<<"\nThe number is Negative"<< endl;
    }


    return 0;
}
