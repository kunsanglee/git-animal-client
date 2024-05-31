import { useState } from 'react';
import type { GetServerSidePropsContext } from 'next';
import styled from 'styled-components';

import Header from '@/components/Layout/Header';

import GotchaSection from './GotchaSection';
import HistoryTable from './HistoryTable';
import ProductTable from './ProductTable';
import SellListSection from './SellListSection';
import SellSection from './SellSection';
import Tab from './Tab';

export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const tab = context.query.tab ?? 'products';

  return { props: { tab } };
};

function ShopPage({ tab }: { tab: string }) {
  const [selectedTab, setSelectedTab] = useState(tab);

  return (
    <>
      <Header />
      <Main>
        <ShopMain>
          <TopSection>
            <Heading>Git Animals Auction</Heading>
          </TopSection>
          <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <GotchaSection />
          <section style={{ height: '644px' }}>
            {selectedTab === 'products' && <ProductTable />}
            {selectedTab === 'history' && <HistoryTable />}
            {selectedTab === 'sell' && <SellSection />}
            {selectedTab === 'sellList' && <SellListSection />}
          </section>
        </ShopMain>
      </Main>
    </>
  );
}

export default ShopPage;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: fit-content;
  min-height: 100vh;
`;

const TopSection = styled.section`
  margin-bottom: 30px;
  display: flex;
  gap: 120px;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 44.8px */
  letter-spacing: -0.3px;
`;

const ShopMain = styled.main`
  width: 1500px;
  height: 800px;

  background-image: url('/shop/shop-bg.svg');
  padding: 40px 20px;

  display: grid;
  grid-template-columns: 384px 1fr;
  grid-column-gap: 132px;
`;
