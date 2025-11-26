// src/data/mlProjects.js

export const mlProjects = [
  {
    id: "spectral-lora",
    slug: "spectral-lora",
    title: "Spectral LoRA: Layer-wise Rank Allocation for LLaMA",
    category: "Machine Learning",
    shortTagline:
      "A structure-aware LoRA variant that assigns per-layer ranks based on spectral gaps.",
    shortDescription:
      "This project investigates how LoRA fine-tuning alters internal model representations, focusing on intruder dimensions and spectral behavior. After challenging key claims from prior work, it introduces Spectral LoRA, a method that determines each layer’s rank from its singular value spectrum to enable more principled, structure-aware fine-tuning.",
    longDescription:
      "The project begins by revisiting the findings of “LoRA vs. Full Fine-Tuning: An Illusion of Equivalence,” which argues that LoRA introduces harmful intruder dimensions that do not appear under full fine-tuning. Experiments with RoBERTa and LLaMA, however, show a different trend: intruder dimensions often increase with LoRA rank, yet the models still generalize well on out-of-distribution benchmarks. This discrepancy motivates a closer examination of the spectral behavior of each layer’s weight matrices. By studying singular value shifts and applying Davis–Kahan perturbation theory, the project analyzes how and why intruder dimensions emerge during adaptation. These insights lead to the development of Spectral LoRA, a variant that assigns different LoRA ranks to each layer based on its spectral gap profile. Although this approach does not yet outperform random rank assignment under equal parameter budgets, it provides groundwork for future structure-aware and adaptive fine-tuning methods.",
    problems: [
      "Do LoRA-induced intruder dimensions actually harm generalization?",
      "How do LoRA rank and spectral properties influence representation shifts?",
      "Can spectral gaps be used to assign layer-wise LoRA ranks more intelligently?",
      "Does spectrum-guided adaptation improve performance under fixed parameter budgets?"
    ],
    approach: [
      "Reproduced intruder-dimension measurements using SVD similarity across 24 attention matrices in RoBERTa.",
      "Evaluated LoRA vs full fine-tuning across MNLI, SST, NER, WiC, and WikiText with multiple ranks.",
      "Analyzed singular vector shifts using spectral gap statistics and Davis–Kahan perturbation theory.",
      "Designed Spectral LoRA with three rank-assignment strategies derived from spectral gaps (average-gap, inverse-gap, weighted exponential gap).",
      "Implemented per-layer rank assignment for both RoBERTa and LLaMA and compared each method to a random-rank baseline under equal parameter budgets.",
      "Measured performance differences using ID/OOD accuracy and perplexity metrics."
    ],
    results: [
      "Intruder dimensions generally increase with LoRA rank across tasks, yet models with many intruders still generalize well.",
      "Full fine-tuning consistently yields zero intruder dimensions, leaving an open question about why it behaves so differently.",
      "Spectral gaps vary significantly across layers, confirming that some layers are structurally more sensitive to perturbations.",
      "Spectral LoRA did not outperform randomly assigned ranks in RoBERTa tasks, partly because baseline performance left little room for improvement.",
      "On LLaMA with WikiText, spectral-based methods often produced high perplexity, with the first method being the only partially competitive variant.",
      "Overall findings suggest simple spectral heuristics are insufficient, but they highlight the potential for more advanced structure-aware fine-tuning strategies."
    ],
    githubUrl: "https://github.com/himanii777/LoRA-from-scratch-for-LLaMA",
    extraLinks: [{
        label: "Base Paper",
        url: "https://arxiv.org/abs/2410.21228"
      }],
    imagePlaceholders: [
      {
        key: "heatmap",
        title: "Intruder-dimension heatmap",
        description:
          "Visualization of similarity scores for LoRA rank = 1 on RoBERTa fine-tuned on MNLI. Dark blue indicates high similarity; gaps correspond to intruder dimensions."
      },
      {
        key: "average-gaps",
        title: "Average spectral gaps",
        description:
          "Average spectral gaps for all layers modified by LoRA, using the first ten spectral gaps for each layer."
      }
    ],
    tech: ["PyTorch", "LoRA", "Full-finetuning", "LLaMA", "RoBERTa", "Spectral methods"]
  },
  {
    id: "styleclip-gating",
    slug: "styleclip-gating",
    title: "Disentangled Latent Gating for Expression-Preserving StyleCLIP",
    category: "Machine Learning / Computer Vision",
    shortTagline:
      "A gated, segment-wise latent mapper that enables text-driven edits while preserving facial expressions and identity.",
    shortDescription:
      "This project extends StyleCLIP by splitting the latent space into semantic segments and applying separate mapper networks with static and dynamic gating. The goal is to prevent expression distortion and identity loss in text-guided GAN manipulation, with a focus on the Beyoncé mapper used for evaluation.",
    longDescription:
      "StyleCLIP often produces global edits that unintentionally overwrite expressions, identity features, and other fine-grained details. To address this, the mapper architecture is redesigned by dividing the w+ latent code into five semantic segments and training separate mappers equipped with learnable gating mechanisms that regulate the extent of modification in each segment. This approach improves disentanglement across attributes such as expression, hair, shape, and color, enabling more localized and controlled edits. Results in the poster show that the gated mapper generates more realistic edits, better preserves facial expressions, and introduces significantly fewer artifacts compared to the original StyleCLIP.",
    problems: [
      "StyleCLIP often distorts expressions or overwrites subtle identity cues when applying text-driven edits.",
      "Global latent modifications can entangle unrelated features such as hair and expression.",
      "Expression-preserving edits require finer control over how different latent segments are modified.",
      "The original mapper architecture lacks mechanisms to freeze or regulate specific feature changes."
    ],
    approach: [
      "Implemented a segmented mapper architecture that splits w+ into coarse, shape, expression, hair, and micro feature groups.",
      "Added static and dynamic gating, allowing fixed or learnable per-segment scaling of latent deltas to freeze or amplify changes.",
      "Integrated additional loss functions including color loss, correlation loss, and orthogonality loss for better disentanglement.",
      "Trained the mapper networks, with primary responsibility for training the Beyoncé mapper, which demonstrated strong expression preservation.",
      "Reproduced improved editing results shown in comparison panels, including edits for Beyoncé and Hillary Clinton.",
      "Implemented training improvements such as selective gate training, more stable batches, and faster convergence strategies."
    ],
    results: [
      "The Beyoncé mapper produced realistic and stable edits, preserving original expressions while aligning well with text prompts.",
      "Compared to the base StyleCLIP mapper, the model avoided color shifts, exaggerated facial changes, and distorted expressions.",
      "Segment-wise disentanglement reduced interference between hair edits and expression edits.",
      "Gating mechanisms provided fine-grained control, improving visual quality and reducing artifacts.",
      "Additional loss terms improved regularization and reduced unintended changes, especially for expression-heavy prompts like “Surprised.”",
      "Training time was reduced dramatically (from around 10 hours to under 20 minutes) due to architectural and optimization improvements."
    ],
    githubUrl:
      "https://github.com/himanii777/Disentangled-Latent-Gating-StyleCLIP",
    extraLinks: [
      {
        label: "Poster",
        url: "https://drive.google.com/file/d/1hD8vL7_lSOwZ1lC2b5JY6oTJNRUGiw8h/view?usp=sharing"
      }
    ],
    imagePlaceholders: [
      {
        key: "problem-statement",
        title: "Problem statement illustration",
        description:
          "Side-by-side comparison showing how baseline StyleCLIP distorts expressions and identity."
      },
      {
        key: "results",
        title: "Gated StyleCLIP results",
        description:
          "Visual comparison of edited faces, demonstrating expression preservation and reduced artifacts."
      }
    ],
    tech: ["PyTorch", "StyleGAN", "StyleCLIP", "GANs", "Computer Vision"]
  },
  {
    id: "deblurgan",
    slug: "deblurgan",
    title: "DeblurGAN Image Restoration",
    category: "Machine Learning / Computer Vision",
    shortTagline:
      "Experimenting with DeblurGAN architectures to restore clarity in motion-blurred images.",
    shortDescription:
      "This project implements DeblurGAN and explores how different architectural and training choices influence image deblurring. Multiple generator–discriminator setups, loss functions, and training ratios were tested to stabilize GAN training and improve visual quality.",
    longDescription:
      "DeblurGAN was implemented using a ResNet-based generator while testing several discriminator designs, including PatchGAN and hybrid CNN-based variants. Training incorporated a range of perceptual losses, such as VGG19 and Vision Transformers, along with adversarial losses like WGAN-GP. Because GAN training is highly sensitive, many configurations led to noisy outputs, mode collapse, or increasingly degraded images at higher epochs. After extensive debugging of preprocessing steps, perceptual-loss layers, and overall training dynamics, the most stable performance came from a simplified DeblurGAN setup using VGG19 perceptual loss and a PatchGAN discriminator. The final model was able to restore basic image clarity in simpler scenes but continued to struggle with finer details such as text and faces.",
    problems: [
      "Implement DeblurGAN and understand how architecture affects deblurring quality.",
      "Find stable generator–discriminator configurations for consistent GAN training.",
      "Reduce model collapse across long training runs.",
      "Achieve usable deblurring results given limited compute and dataset quality."
    ],
    approach: [
      "Implemented multiple generator–discriminator architectures, including ResNet, U-Net, PatchGAN, and hybrid discriminators.",
      "Experimented with perceptual losses such as VGG19 and ViT and adversarial losses like WGAN-GP.",
      "Tuned training ratios, learning rates, batch sizes, and noise augmentation to stabilize training.",
      "Fixed preprocessing issues including aspect ratio handling and image normalization.",
      "Evaluated outputs across epochs to understand collapse patterns and ideal training windows."
    ],
    results: [
      "Early experimental setups often collapsed or produced heavy noise due to unstable GAN dynamics.",
      "Larger datasets and noise augmentation improved generalization but still led to degradation after long training.",
      "VGG19 perceptual loss consistently yielded more coherent results than alternatives.",
      "PatchGAN combined with a ResNet generator delivered the most stable and interpretable outputs.",
      "The best deblurring quality appeared around mid-training, with overtraining causing artifacts.",
      "The final model restored basic image clarity but struggled with fine detail reconstruction."
    ],
    githubUrl: "https://github.com/himanii777/DeblurGAN_ipynb_simplified",
    extraLinks: [],
    imagePlaceholders: [
      {
        key: "before-after",
        title: "",
        description:
          " Final stabilized generator and discriminator loss graphs"
      }
    ],
    tech: ["PyTorch", "GANs", "Computer Vision"]
  },
  {
    id: "3han-fake-news",
    slug: "3han-fake-news",
    title:
      "3HAN-PyTorch: Hierarchical Attention Network for Fake-News Detection",
    category: "Machine Learning / NLP",
    shortTagline:
      "Implementation of a three-level hierarchical attention network to classify news authenticity.",
    shortDescription:
      "This project implements the 3HAN architecture in PyTorch with word-level, sentence-level, and title-level attention to build a news representation for fake-news detection. It includes a full data loading pipeline and model that achieved strong accuracy on a large news dataset.",
    longDescription:
      "The 3HAN model processes text in a bottom-up manner, where words form sentences, sentences form documents, and the title provides an additional layer of focus. In this PyTorch implementation, each level is encoded using bidirectional GRUs, and hierarchical attention mechanisms combine the representations into a single news vector. The data loader manages article text, sentence segmentation, and integration of the title. Training required addressing class imbalance and handling long articles drawn from a large Kaggle dataset. The final model reaches accuracy in the mid-90% range for classifying news as authentic or fake.",
    problems: [
      "Build a model that can identify fake news articles using hierarchical attention across words, sentences, and titles.",
      "Construct a pipeline that segments documents into sentences and words and applies multi-level attention.",
      "Handle challenges of unbalanced data, long article texts, and efficient representation learning."
    ],
    approach: [
      "Created DataLoader modules that segment article texts into sentences and words and feed them into hierarchical GRU layers.",
      "Developed attention modules at word, sentence, and title levels.",
      "Designed a unified model combining attention outputs into a news vector followed by a classification head.",
      "Tuned hyperparameters such as GRU hidden size, attention dimensions, dropout, and learning rate schedule.",
      "Trained the model end-to-end on a large Kaggle news dataset using balanced sampling strategies."
    ],
    results: [
      "Reached approximately 95.7% accuracy on the test split of the dataset.",
      "Precision and recall for the true class were both above 0.95, showing balanced performance.",
      "Title-level attention provided a noticeable benefit in distinguishing fake-news patterns from main content.",
      "Training time and memory usage were controlled through sentence-length truncation and batching strategies."
    ],
    githubUrl: "https://github.com/himanii777/3HAN_pytorch",
    extraLinks: [],
    imagePlaceholders: [
      {
        key: "architecture",
        title: "3HAN architecture diagram",
        description:
          "Overview diagram showing the three levels of attention: word, sentence, and title."
      },
      {
        key: "confusion-matrix",
        title: "Confusion matrix",
        description:
          "Visualization of classification performance for fake vs authentic news."
      }
    ],
    tech: ["PyTorch", "NLP", "Attention", "Fake-news detection"]
  },
  {
    id: "transformer-timeseries",
    slug: "transformer-timeseries",
    title: "Time-Series Forecasting Using Transformers",
    category: "Machine Learning / Time-Series",
    shortTagline:
      "Using an attention-based Transformer model to forecast non-stationary time-series data.",
    shortDescription:
      "This project implements a Transformer to predict values in a synthetic time-series with shifting statistical properties. The model leverages multi-head attention and positional encoding to learn both global patterns and evolving trends, achieving low prediction error and stable convergence.",
    longDescription:
      "The dataset is generated from a Weibull-based process whose parameters vary over time, producing a challenging non-stationary sequence. To capture the resulting long-range temporal dependencies, the project implements a Transformer architecture with positional encoding, self-attention layers, and a feedforward prediction head. The model converges quickly, showing low loss and smooth prediction curves across training epochs. Despite the complexity of the underlying signal, the Transformer successfully captures the overall trends and delivers consistent forecasts, demonstrating the advantages of attention mechanisms for sequence modeling beyond recurrent networks.",
    problems: [
      "Predict future values in a dynamically changing time-series.",
      "Design a Transformer architecture suited for numeric sequential data.",
      "Evaluate prediction stability, convergence speed, and loss behavior.",
      "Demonstrate advantages of attention-based modeling for non-stationary sequences."
    ],
    approach: [
      "Generated a synthetic Weibull-driven time-series dataset with evolving parameters.",
      "Implemented a Transformer with positional encoding, multi-head attention, and feedforward layers.",
      "Tuned hyperparameters such as number of heads, embedding size, dropout, and learning rate.",
      "Trained the model on Colab, tracked loss curves, and generated prediction visualizations.",
      "Compared model forecasts to ground truth to assess error and trend following."
    ],
    results: [
      "Achieved stable convergence with low loss throughout training.",
      "Transformer predictions aligned closely with the overall structure of the sequence.",
      "The model generalized well despite non-stationary data patterns.",
      "Training was fast and efficient due to the parallelizable architecture.",
      "Generated clear prediction curves that smoothly track time-series behavior."
    ],
    githubUrl:
      "https://github.com/himanii777/Timeseries-data-prediction-using-Transformers",
    extraLinks: [],
    imagePlaceholders: [
      {
        key: "loss-curve",
        title: "Training loss curve",
        description:
          "Plot showing training loss decreasing and stabilizing over epochs."
      },
      {
        key: "predictions",
        title: "Forecast vs ground truth",
        description:
          "Overlay of model predictions and true values for a hold-out segment of the time-series.",
      }
    ],
    tech: ["PyTorch", "Transformers", "Time-series"]
  }
];
