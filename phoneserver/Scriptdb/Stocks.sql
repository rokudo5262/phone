USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Stocks](
	[stock_id] [int] IDENTITY(1,1) not null PRIMARY KEY,
  [store_id] [int] null,
	[product_id][int] null,
  [quantity][int] null,
	[deleted] [bit] NOT NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
);

INSERT INTO [Stocks]( product_id,store_id,quantity,deleted)
   VALUES
   ('1','1','100','0'),
   ('2','1','100','0'),
   ('3','1','100','0'),
   ('4','1','100','0'),
   ('5','1','100','0');

ALTER TABLE [dbo].[Stocks] ADD  CONSTRAINT [DF_stocks_deleted]  DEFAULT ((0)) FOR [deleted]
GO

ALTER TABLE [dbo].[Stocks] ADD  CONSTRAINT [DF_stocks_deleted]  DEFAULT ((0)) FOR [deleted]
GO

ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Products] FOREIGN KEY([product_id])
REFERENCES [dbo].[Products] ([product_id])
GO

ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Products]
GO

ALTER TABLE [dbo].[Stocks]  WITH CHECK ADD  CONSTRAINT [FK_Stocks_Stores] FOREIGN KEY([store_id])
REFERENCES [dbo].[Stores] ([store_id])
GO

ALTER TABLE [dbo].[Stocks] CHECK CONSTRAINT [FK_Stocks_Stores]
