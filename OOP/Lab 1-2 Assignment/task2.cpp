#include <iostream>

using namespace std;

int main() {
   float length, width, area;

   cout << "\nEnter the length of rectangle : ";
   cin>>length;

   cout << "\nEnter the width of rectangle : ";
   cin>>width;

   area = length * width;
   cout << "\nArea : " << area;

   return (0);
}
