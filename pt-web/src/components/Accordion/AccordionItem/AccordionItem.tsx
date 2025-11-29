import {Item as RadixAccordionItem} from "@radix-ui/react-accordion";
import {AccordionContent, AccordionContentProps} from "src/components/Accordion/AccordionContent/AccordionContent";
import {AccordionTrigger, AccordionTriggerProps} from "src/components/Accordion/AccordionTrigger/AccordionTrigger";
import styles from "src/components/Accordion/AccordionItem/AccordionItem.module.scss";

/**
 * Props for the {@link AccordionItem} component.
 */
export interface AccordionItem {

  /**
   * React element representing the trigger for this AccordionItem.
   */
  trigger: AccordionTriggerProps;

  /**
   * React element representing the content for this AccordionItem.
   */
  content: AccordionContentProps;

  /**
   * A unique key to identify the AccordionItem.
   */
  itemKey: string;
}

/**
 * A component representing an individual item within the Accordion.
 * It should be used as a child of the Accordion component.
 */
export const AccordionItem = (props: AccordionItem) => {
  return (
    <RadixAccordionItem
      className={styles.accordionItem}
      value={props.itemKey}
    >
      <AccordionTrigger
        child={props.trigger.child}
        dataCy={props.trigger.dataCy}
      />
      <AccordionContent
        child={props.content.child}
        dataCy={props.content.dataCy}
      />
    </RadixAccordionItem>
  );
};
