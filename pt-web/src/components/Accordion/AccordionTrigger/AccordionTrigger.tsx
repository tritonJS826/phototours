import {
  Header as RadixAccordionHeader,
  Trigger as RadixAccordionTrigger,
} from "@radix-ui/react-accordion";
import clsx from "clsx";
import styles from "src/components/Accordion/AccordionTrigger/AccordionTrigger.module.scss";

/**
 * Props for the {@link AccordionTrigger} component.
 */
export interface AccordionTriggerProps {

  /**
   * The child to be displayed within the AccordionTrigger.
   */
  child: React.ReactNode;

  /**
   * Data attribute for cypress testing
   */
  dataCy?: string;
}

/**
 * A component representing the trigger (header) of an individual item within the Accordion.
 * It displays a text label and an optional chevron icon for expanding/collapsing the item.
 */
export const AccordionTrigger = (props: AccordionTriggerProps) => {
  return (
    <RadixAccordionHeader className={styles.accordionHeader}>
      <RadixAccordionTrigger className={styles.accordionTrigger}>
        {props.child}
        <>
          <div className={clsx(styles.icon, styles.plusIcon, styles.plus)} />
          <div className={clsx(styles.icon, styles.minusIcon, styles.minus)} />
        </>
      </RadixAccordionTrigger>
    </RadixAccordionHeader>
  );
};
