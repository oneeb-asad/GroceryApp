import React from "react";
import { Text } from "../../core-ui";
import {
  Spacer,
  ComponentWrapper,
  MainWrapper,
  RowWrapperBasic,
  ScrollWrapper,
} from "../../commons";
import { useStyles } from "./styles";
import { VegetablesSection, FruitsSection } from "./components";

const CategoryScreen = () => {
  const { styles } = useStyles();
  return (
    <MainWrapper>
      <ScrollWrapper>
        <Spacer />
        <Spacer />
        <ComponentWrapper>
          <RowWrapperBasic style={styles.row}>
            <Text style={styles.title}>Vegetables</Text>
            <Text style={styles.showAll}>Show All</Text>
          </RowWrapperBasic>
        </ComponentWrapper>
        <Spacer />
        <Spacer isTiny />
        <VegetablesSection />
        <Spacer />
        <ComponentWrapper>
          <RowWrapperBasic style={styles.row}>
            <Text style={styles.title}>Fruits</Text>
            <Text style={styles.showAll}>Show All</Text>
          </RowWrapperBasic>
        </ComponentWrapper>
        <Spacer />
        <Spacer isTiny />
        <FruitsSection />
        <Spacer />
      </ScrollWrapper>
    </MainWrapper>
  );
};
export default CategoryScreen;
