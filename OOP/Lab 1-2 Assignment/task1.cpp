#include <iostream>
using namespace std;

int main()
{
    float side_length, area;

    cout<<"\nEnter the square's side length: "<< endl;
    cin>>side_length;

    area = side_length * side_length;

    cout<<"\nThe square's area is \t" << area << endl;

    return 0;
}
