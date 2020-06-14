USE [phone]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[OrderItems](
	[item_id][int] IDENTITY(1,1) not null PRIMARY KEY,
	[order_id][int] NOT NULL,
	[product_id][int] NOT NULL,
	[quantity][int] NULL,
	[list_price][int] NULL,
	[discount][int] NULL,
	[deleted] [bit] NOT NULL,
  [status][nvarchar](255) NULL,
	[remark][nvarchar](255) NULL,
	[createdBy] [nvarchar] (255) null,
	[createdDateTime] [datetime] null,
	[lastUpdatedBy] [nvarchar] (255) null,
	[lastUpdatedDateTime] [datetime] null,
);

INSERT INTO [OrderItems]( order_id,product_id,quantity,deleted)
   VALUES
   ('1','1','1','0'),
   ('1','1','1','0'),
   ('2','1','1','0'),
   ('2','1','1','0');

ALTER TABLE [dbo].[OrderItems] ADD  CONSTRAINT [DF_OrderItems_deleted]  DEFAULT ((0)) FOR [deleted]
GO

ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderItems_Orders] FOREIGN KEY([order_id])
REFERENCES [dbo].[Orders] ([order_id])
GO

ALTER TABLE [dbo].[OrderItems] CHECK CONSTRAINT [FK_OrderItems_Orders]
GO

ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD  CONSTRAINT [FK_OrderItems_Products] FOREIGN KEY([product_id])
REFERENCES [dbo].[Products] ([product_id])
GO

ALTER TABLE [dbo].[OrderItems] CHECK CONSTRAINT [FK_OrderItems_Products]
GO
