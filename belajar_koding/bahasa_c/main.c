#include <stdio.h>
#include <stdlib.h>

int Rekursif(int num[]){
    if(num[0] != -1){
        return num[0]+Rekursif(num+1) ;
    }else{
        return 0;
    }
}

/**
  *@return int
*/
int decimal_precision(){

    printf("%.4f",3.9);
}



/**
int 	2 or 4 bytes
float 	4 bytes
double 	8 bytes
char 	1 byte
*/
int main()
{
    int nums[]={1,2,3,4,5,-1}; //15
       int res=Rekursif(nums);
     //printf("result %d",res);
     //decimal_precision();
     printf("size %d",sizeof(4));
    return 0;
}
