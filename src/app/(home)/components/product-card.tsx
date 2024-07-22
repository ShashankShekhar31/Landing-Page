import { Card, CardContent, CardFooter, CardHeader} from '@/components/ui/card';
import React from 'react';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import ToppingList from './topping-list';

export type Product = {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
}

type PropTypes = { product: Product};

const ProductCard = ({product}: PropTypes) => {
  return (
  <Card className='border-none rounded-xl'>
  <><CardHeader className="flex items-center justify-center">
  <Image alt="pizza-main" src={'/pizza-main.png'} width={150} height={150}/>
      </CardHeader>
      <CardContent>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="mt-2">{product.description}</p>
          </CardContent>
          <CardFooter className="flex items-center justify-between mt-4">
              <p>
                <span>From </span>
                <span className="font-bold">₹{product.price}</span>
              </p>
              <Dialog>
  <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">Choose</DialogTrigger>
  <DialogContent className='max-w-3xl p-0'>
    <div className="flex ">
        <div className="w-1/3 br-white rounded p-8 flex items-center justify-center">
            <Image src={'/pizza-main.png'} width={450} height={450} alt={product.name}/>
        </div>
        <div className="w-2/3 p-8">
        <h3 className='text-xl font-bold'>{product.name}</h3>
        <p className='mt-1'>{product.description}</p>

        <div>
        <h4 className='mt-6'>Choose the size</h4>
        <RadioGroup defaultValue="medium" className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <RadioGroupItem
              value="samll"
              id="small"
              className="peer sr-only"
              aria-label="small"
            />
            <Label
              htmlFor="small"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Small
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="medium"
              id="medium"
              className="peer sr-only"
              aria-label="medium"
            />
            <Label
              htmlFor="medium"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Medium
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="large"
              id="large"
              className="peer sr-only"
              aria-label="large"
            />
            <Label
              htmlFor="large"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Large
            </Label>
          </div>
        </RadioGroup>
        </div>
        <div>
        <h4 className='mt-6'>Choose the crust</h4>
        <RadioGroup defaultValue="medium" className="grid grid-cols-3 gap-4 mt-2">
          <div>
            <RadioGroupItem
              value="thin"
              id="thin"
              className="peer sr-only"
              aria-label="thin"
            />
            <Label
              htmlFor="thin"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Thin
            </Label>
          </div>

          <div>
            <RadioGroupItem
              value="thick"
              id="thick"
              className="peer sr-only"
              aria-label="thick"
            />
            <Label
              htmlFor="thick"
              className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              Thick
            </Label>
          </div>
        </RadioGroup>
        </div>
        <ToppingList/>
        </div>
    </div>
  </DialogContent>
</Dialog>
          </CardFooter></>
</Card>
  );
  
};

export default ProductCard;