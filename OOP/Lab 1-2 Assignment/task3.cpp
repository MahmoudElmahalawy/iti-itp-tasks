#include <iostream>

using namespace std;

int main() {
   int num;

   cout << "\nEnter a number : ";
   cin>>num;

   if (num%2 == 0){
    cout<<"\nYour Number is even"<<endl;
   }else {
    cout<<"\nYour Number is odd"<<endl;
   }

   return (0);
}
