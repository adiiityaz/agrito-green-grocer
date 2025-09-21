import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Truck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  
  // Mock cart summary
  const orderSummary = {
    items: 4,
    subtotal: 5397,
    shipping: 0,
    total: 5397,
  };

  const steps = [
    { number: 1, title: "Shipping", icon: Truck },
    { number: 2, title: "Payment", icon: CreditCard },
    { number: 3, title: "Confirmation", icon: CheckCircle },
  ];

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
              currentStep >= step.number 
                ? "bg-primary border-primary text-primary-foreground" 
                : "border-muted-foreground text-muted-foreground"
            }`}>
              <step.icon className="w-5 h-5" />
            </div>
            <span className={`ml-2 text-sm font-medium ${
              currentStep >= step.number ? "text-primary" : "text-muted-foreground"
            }`}>
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <div className={`w-12 h-0.5 mx-4 ${
                currentStep > step.number ? "bg-primary" : "bg-muted"
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderShippingForm = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="w-5 h-5" />
          Shipping Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
        </div>
        
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" placeholder="+91 98765 43210" />
        </div>
        
        <div>
          <Label htmlFor="address">Address</Label>
          <Textarea id="address" placeholder="Street address, city, state" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="Mumbai" />
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="Maharashtra" />
          </div>
          <div>
            <Label htmlFor="pincode">Pin Code</Label>
            <Input id="pincode" placeholder="400001" />
          </div>
        </div>
        
        <Button onClick={() => setCurrentStep(2)} className="w-full">
          Continue to Payment
        </Button>
      </CardContent>
    </Card>
  );

  const renderPaymentForm = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2 p-4 border rounded-lg">
            <RadioGroupItem value="cod" id="cod" />
            <Label htmlFor="cod" className="flex-1">
              <div className="font-medium">Cash on Delivery</div>
              <div className="text-sm text-muted-foreground">
                Pay when you receive your order
              </div>
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 p-4 border rounded-lg">
            <RadioGroupItem value="upi" id="upi" />
            <Label htmlFor="upi" className="flex-1">
              <div className="font-medium">UPI Payment</div>
              <div className="text-sm text-muted-foreground">
                Pay using UPI apps like GPay, PhonePe, Paytm
              </div>
            </Label>
          </div>
          
          <div className="flex items-center space-x-2 p-4 border rounded-lg">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex-1">
              <div className="font-medium">Credit/Debit Card</div>
              <div className="text-sm text-muted-foreground">
                Visa, Mastercard, RuPay accepted
              </div>
            </Label>
          </div>
        </RadioGroup>
        
        {paymentMethod === "card" && (
          <div className="space-y-4 pt-4 border-t">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
          </div>
        )}
        
        <div className="flex gap-4">
          <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
            Back to Shipping
          </Button>
          <Button onClick={() => setCurrentStep(3)} className="flex-1">
            Place Order
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderConfirmation = () => (
    <Card className="text-center">
      <CardContent className="pt-6">
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
        <p className="text-muted-foreground mb-4">
          Thank you for your order. We'll send you a confirmation email shortly.
        </p>
        <div className="bg-muted p-4 rounded-lg mb-6">
          <p className="font-medium">Order ID: #AGR2024001</p>
          <p className="text-sm text-muted-foreground">
            Estimated delivery: 3-5 business days
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link to="/account">Track Order</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        
        {renderStepIndicator()}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {currentStep === 1 && renderShippingForm()}
            {currentStep === 2 && renderPaymentForm()}
            {currentStep === 3 && renderConfirmation()}
          </div>
          
          {currentStep < 3 && (
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Items ({orderSummary.items})</span>
                    <span>₹{orderSummary.subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-success">FREE</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{orderSummary.total.toLocaleString()}</span>
                  </div>
                  
                  <div className="pt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Free delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Quality guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;