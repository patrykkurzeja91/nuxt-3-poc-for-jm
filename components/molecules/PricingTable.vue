<template>
  <div class="flex -m-4 flex-wrap">
    <div class="w-full p-4 lg:w-1/2 xl:w-1/4">
      <MoleculesPricingCard
        popular="bestSeller"
        bundle="CATEGORY SPONSOR"
        price="£1000"
        :benefit-list="[
          'Sponsoring a category of your choice',
          '2 tickets to the Final Gala',
          'Awarding the statuette to the winners on the stage',
          'Photo with the winner',
          'Possibility to award a prize: a voucher, your product, a material prize',
          'Logo and information about the sponsor in social media during the gala, during the presentation of the selected category',
          'Information about the sponsor in the event brochure',
          'Information about the sponsor in the newsletter',
          'Rotating logo displayed during the gala',
          'Thanks to the sponsor from the stage',
        ]"
      />
    </div>
    <div class="w-full p-4 lg:w-1/2 xl:w-1/4">
      <MoleculesPricingCard
        popular="popular"
        bundle="DIAMOND"
        price="£600"
        :benefit-list="[
          '2 tickets to the Final Gala',
          '5 minutes for the presentation of the company on stage',
          'Possibility to add to goodie bags for gala participants: voucher, product sample',
          'Free nomination of the company in the selected category',
          'Logo and information about the sponsor in social media and during the gala',
          'Company logo in a movie  from the gala',
          'Information about the sponsor in the event brochure',
          'Information about the sponsor in the newsletter',
          'Rotating logo displayed during the gala',
          'Thanks to the sponsor from the stage',
        ]"
      />
    </div>
    <div class="w-full p-4 lg:w-1/2 xl:w-1/4">
      <MoleculesPricingCard
        popular=""
        bundle="GOLD"
        price="£400"
        :benefit-list="[
          '1 ticket to the Final Gala',
          '15 second advert shown at main event',
          'Possibility to add to goodie bags for gala participants: voucher, product sample',
          'Logo and information about the sponsor in social media and during the gala',
          'Company logo in a movie  from the gala',
          'Information about the sponsor in the event brochure',
          'Information about the sponsor in the newsletter',
          'Rotating logo displayed during the gala',
          'Thanks to the sponsor from the stage',
        ]"
      />
    </div>
    <div class="w-full p-4 lg:w-1/2 xl:w-1/4">
      <MoleculesPricingCard
        popular=""
        bundle="SILVER"
        price="£250"
        :benefit-list="[
          'Possibility to add to goodie bags for gala participants: voucher, product sample',
          'Logo and information about the sponsor in social media and during the gala',
          'Information about the sponsor in the event brochure',
          'Information about the sponsor in the newsletter',
          'Rotating logo displayed during the gala',
          'Thanks to the sponsor from the stage',
        ]"
      />
    </div>
  </div>
</template>
