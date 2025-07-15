import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-primary-red font-montserrat font-bold text-xl mb-2">Testimonials</h2>
          <h3 className="text-white font-montserrat font-bold text-5xl mb-6">What people are saying</h3>
        </div>
        
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/5">
            <img src="/images/img_quotesicon_1.png" alt="Quotes" className="w-52 h-52" />
          </div>
          
          <div className="md:w-4/5">
            <p className="text-white font-montserrat font-bold text-base leading-9 mb-8">
              Etiam rhoncus lacus eget volutpat molestie. Mauris at diam hendrerit, cursus odio eget, scelerisque dolor. 
              Pellentesque cursus tempor elit. Nam augue justo, vestibulum eget turpis quis, pulvinar vehicula nulla. 
              Donec tincidunt lacus sed posuere feugiat. Praesent nec ex odio. Ut commodo sollicitudin egestas. 
              Praesent consectetur nibh sit amet blandit dictum. Suspendisse aliquam condimentum fringilla. 
              In lectus leo, scelerisque vitae feugiat at, commodo vitae turpis.
            </p>
            
            <div>
              <h4 className="text-white font-montserrat font-bold text-xl mb-1">Jacob Kornelius</h4>
              <p className="text-primary-red font-roboto text-sm">CEO Youseo</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <img src="/images/img_abstractgeometricseamlesspatterns2zqt82e_2.png" alt="Geometric Pattern" className="w-64 h-8" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;