// app/components/Dashboard.js
import Image from 'next/image';

export default function Dashboard() {
  return (
    <div className="bg-white h-[2587px] relative overflow-hidden">
      <div className="bg-black h-[2587px] absolute inset-0 overflow-hidden">
        {/* Main Content Area */}
        <div className="bg-white rounded-[46px] w-[1223px] h-[2520px] absolute left-[198px] top-7 overflow-hidden">
          {/* Header Navigation */}
          <div className="flex items-center justify-between p-4">
            {/* Navigation Buttons */}
            <div className="flex space-x-4">
              {[
                { label: 'DATA', icon: '/bxs-data0.svg', left: '157px' },
                { label: 'LEAD', icon: '/fluent-mdl-2-party-leader0.svg', left: '336px' },
                { label: 'SERVICES', icon: '/mdi-account-service0.svg', left: '508px' },
                { label: 'MART', icon: '/mdi-cart0.svg', left: '706px' },
                { label: 'TEAM SUPPORT', icon: '', left: '867px' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-[20px] w-[120px] h-[50px] flex items-center justify-center bg-gradient-to-b from-[#053772] to-[#0968D8] border border-blue-500 shadow-[0_4px_4px_rgba(12,111,255,1)]"
                  style={{ position: 'absolute', left: item.left, top: '17px' }}
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={item.label === 'DATA' ? 19 : 17}
                      height={item.label === 'DATA' ? 19 : 17}
                      className="mr-2"
                    />
                  )}
                  <span className="text-white font-['Montserrat'] font-bold text-[11.33px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* User Profile */}
            <div
              className="bg-white rounded-[22px] border w-[184px] h-[45px] flex items-center space-x-2 px-3 absolute right-[23px] top-[19px]"
              style={{
                borderImage: 'linear-gradient(94.39deg, #0968D8, #053772) 1',
                boxShadow: '0 7px 8px rgba(0,0,0,0.25)',
              }}
            >
              <Image
                src="/ellipse-780.png"
                alt="User"
                width={29}
                height={29}
                className="rounded-full shadow-[0_3px_4px_rgba(12,111,255,1)] object-cover"
              />
              <div>
                <p className="text-black font-['Montserrat'] font-bold text-[11.33px]">
                  PAWAN CHAUHAN
                </p>
                <p className="text-black font-['Montserrat'] font-medium text-[7.57px]">
                  pawanchauchan@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className="rounded-[17px] w-[186px] h-[366px] absolute left-1 top-[137px] bg-gradient-to-b from-[#053772] to-[#0968D8] border border-blue-500 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          <div className="p-4 space-y-4">
            {[
              { label: 'MESSAGES: 0', icon: '/ic-baseline-message0.svg' },
              { label: 'DATA: ₹0', icon: '/bxs-data1.svg' },
              { label: 'BUSINESSES: ₹0.00', icon: '/tdesign-user-business-filled0.svg' },
              { label: 'WALLET: ₹0.00', icon: '/f-7-wallet-fill0.svg' },
              { label: 'ACCOUNT: ₹0.00', icon: '/ic-round-account-circle0.svg' },
              { label: 'INCOME: ₹0.00', icon: '/clip-path-group1.svg' },
              { label: 'RECHARGE: ₹50.00', icon: '/clip-path-group0.svg' },
              { label: 'VAILDITY: 6/14/2025', icon: '/group-552.svg' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <span className="text-white font-['Montserrat'] font-bold text-[11.33px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="absolute left-1 top-[528px] space-y-2">
          {[
            { label: 'Teams', icon: '/fluent-people-team-28-filled0.svg' },
            { label: 'Career Assessment', icon: '/fluent-people-team-toolbox-24-filled0.svg' },
            { label: 'Template', icon: '/carbon-template0.svg' },
            { label: 'Service', icon: '/mdi-customer-service0.svg' },
            { label: 'Product', icon: '/eos-icons-product-subscriptions0.svg' },
            { label: 'Communication', icon: '/mask-group1.svg' },
            { label: 'Selection Process', icon: '/streamline-ultimate-messages-people-user-check-bold0.svg' },
            { label: 'Employer', icon: '/group15.svg' },
            { label: 'Work Seeker', icon: '/streamline-ultimate-job-search-man-bold0.svg' },
            { label: 'CPP Training', icon: '/group26.svg' },
            { label: 'Institute Management', icon: '/bxs-school0.svg' },
            { label: 'Career Awareness', icon: '/ic-twotone-menu-book0.svg' },
            { label: 'Study', icon: '/hugeicons-study-lamp0.svg' },
            { label: 'Business', icon: '/ic-twotone-business-center0.svg' },
            { label: 'Skill', icon: '/group27.svg' },
            { label: 'CRM', icon: '/fa-6-solid-comment-nodes0.svg' },
            { label: 'Support', icon: '/fluent-person-support-16-filled0.svg' },
            { label: 'Document', icon: '/group28.svg' },
            { label: 'Advisory Panel', icon: '/ic-twotone-admin-panel-settings0.svg' },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[17px] w-[186px] h-[39px] flex items-center px-4 bg-gradient-to-b from-[#053772] to-[#0968D8] border border-blue-500 shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className="mr-2"
              />
              <span className="text-white font-['Montserrat'] font-bold text-[11.33px]">
                {item.label}
              </span>
              <Image
                src={`/group${index + 6}.svg`}
                alt="Arrow"
                width={20}
                height={20}
                className="ml-auto"
              />
            </div>
          ))}
        </div>

        {/* Logo and Branding */}
        <div className="h-[75px] absolute left-0 top-6 overflow-hidden">
          <div className="flex items-center space-x-2">
            <Image
              src="/vector0.svg"
              alt="Logo"
              width={47}
              height={34}
              className="ml-2"
            />
            <div>
              <div className="flex">
                <span className="text-[#0968D8] font-['BakbakOne'] text-[20.74px]">
                  MARGDA
                </span>
                <span className="text-[#FF6C08] font-['BakbakOne'] text-[20.74px] ml-1">
                  WorkPlace
                </span>
              </div>
              <p className="text-white font-['Montserrat'] font-medium text-[11.35px]">
                Automates Business and Income
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}